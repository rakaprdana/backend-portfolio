import { CorsOptions } from "cors";

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`CORS error : ORIGIN ${origin} isn't allowed`));
    }
  },
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
