const express = require("express");
const app = express();

const userRoutes = require("./routes/Users");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const dbConnect = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
dbConnect();
//middlewares
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
	'http://localhost:3000', 
	'https://coding-verse-platform-frontend.vercel.app',
	'https://coding-verse-platform-frontend-jg4zq3lcj.vercel.app' // Newly generated Vercel subdomain
  ];
  
  
  const corsOptions = {
	origin: function (origin, callback) {
	  if (allowedOrigins.includes(origin) || !origin) {
		callback(null, true);
	  } else {
		callback(new Error('Not allowed by CORS'));
	  }
	},
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers if needed
	credentials: true, // Allow credentials if you're using cookies or session
  };
  
  app.use(cors(corsOptions));
  

// app.use(cors({
// 	origin:['http://localhost:3000',"https://deploy-codingVerse.vercel.app"],
// 	methods:["POST","GET"],
// 	credentials:true
// }))


app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

