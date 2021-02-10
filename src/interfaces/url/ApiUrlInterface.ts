import UrlInterface from "@/interfaces/url/UrlInterface";

interface ApiUrlInterface extends UrlInterface {
  query: string;
}

export default ApiUrlInterface;
