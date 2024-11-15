export default interface Order {
  id: number;
  name: string;
  gender: string;
  avatar: string;
  startingLocation: string;
  destination: string;
  total: number;
  createAt?: string
  paidAt?: string
}
