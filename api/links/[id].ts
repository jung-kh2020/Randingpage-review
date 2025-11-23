import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

// 환경변수 체크 및 Redis 인스턴스 생성
let redis: Redis | null = null;

try {
  const hasUrl = !!process.env.UPSTASH_REDIS_REST_URL;
  const hasToken = !!process.env.UPSTASH_REDIS_REST_TOKEN;

  console.log('Environment check:', {
    hasUrl,
    hasToken,
    urlLength: process.env.UPSTASH_REDIS_REST_URL?.length || 0,
    tokenLength: process.env.UPSTASH_REDIS_REST_TOKEN?.length || 0
  });

  if (hasUrl && hasToken) {
    redis = Redis.fromEnv();
    console.log('Redis initialized successfully');
  } else {
    console.error('Missing Redis environment variables!');
    console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('UPSTASH') || k.includes('REDIS') || k.includes('STORAGE')));
  }
} catch (error) {
  console.error('Failed to initialize Redis:', error);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  // Redis 연결 체크
  if (!redis) {
    console.error('Redis not configured');
    return res.status(500).json({
      error: 'Database not configured',
      debug: {
        hasUrl: !!process.env.UPSTASH_REDIS_REST_URL,
        hasToken: !!process.env.UPSTASH_REDIS_REST_TOKEN,
        availableEnvVars: Object.keys(process.env).filter(k =>
          k.includes('UPSTASH') || k.includes('REDIS') || k.includes('STORAGE')
        )
      }
    });
  }

  // GET: 링크 조회
  if (req.method === 'GET') {
    try {
      const link = await redis.get(`link:${id}`);

      if (!link) {
        return res.status(404).json({ error: 'Link not found' });
      }

      return res.status(200).json({ link });
    } catch (error) {
      console.error('Error fetching link:', error);
      return res.status(500).json({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // POST: 링크 저장
  if (req.method === 'POST') {
    try {
      const { link, password } = req.body;

      // 비밀번호 검증
      if (password !== '1234') {
        return res.status(401).json({ error: 'Invalid password' });
      }

      if (!link || typeof link !== 'string') {
        return res.status(400).json({ error: 'Invalid link' });
      }

      // URL 유효성 검증
      try {
        new URL(link);
      } catch {
        return res.status(400).json({ error: 'Invalid URL format' });
      }

      // Redis에 저장
      console.log(`Saving link for ID: ${id}`, { link });
      await redis.set(`link:${id}`, link);
      console.log(`Link saved successfully for ID: ${id}`);

      return res.status(200).json({ success: true, id, link });
    } catch (error) {
      console.error('Error saving link:', error);
      return res.status(500).json({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // 지원하지 않는 메서드
  return res.status(405).json({ error: 'Method not allowed' });
}
