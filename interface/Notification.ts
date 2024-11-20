export default interface Notification {
  id: number;
  title: string;
  message: string;
  createAt: string;
  type?: number;
  isSeen: boolean;
}
