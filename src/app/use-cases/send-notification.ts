import { Content } from "../entities/content"
import { Notification } from "../entities/notification"

interface sendNotificationRequest {
  recipientId: string
  content: string
  category: string
}

interface sendNotificationResponse {
  notification: Notification
}

export class SendNotification {
  async execute(request: sendNotificationRequest): Promise<sendNotificationResponse> {
    const { recipientId, category, content } = request

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category
    })

    return { notification }
  }
}