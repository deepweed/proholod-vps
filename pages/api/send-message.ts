import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  const message = `Новая заявка на #обратный_звонок:\n\nИмя: ${name}\nТелефон: ${phone}`;

  const telegramBotToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!telegramBotToken || !telegramChatId) {
    return res.status(500).json({ error: 'Telegram bot token or chat ID is not defined' });
  }

  const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  try {
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from Telegram API:', errorData);
      return res.status(500).json({ error: 'Failed to send message to Telegram' });
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).json({ error: 'Failed to send message to Telegram' });
  }
}
