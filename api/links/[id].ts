import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
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
      return res.status(500).json({ error: 'Internal server error' });
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
      await redis.set(`link:${id}`, link);

      return res.status(200).json({ success: true, id, link });
    } catch (error) {
      console.error('Error saving link:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // 지원하지 않는 메서드
  return res.status(405).json({ error: 'Method not allowed' });
}
