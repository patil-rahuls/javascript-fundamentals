//////////////////////////////////////////////////////////////
// Excercise: Video Streaming App ////////////////////////////
//////////////////////////////////////////////////////////////

// WIP
/*
// To build a production-ready video streaming server on EC2,
// you shouldn't just pipe() a file.
// You need to handle Range Requests.
// This allows the browser to "seek" (jump to the middle of a
// video) and only download the specific bytes it needs,
// rather than the whole file.
import express from "express";
import fs from "node:fs";
import path from "node:path";

const PORT = 3456;
const app = express();

app.get('video/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'assets', req.params.filename);
    if(!fs.existsSync(filePath)){
        return res.status(404).send(`Video not found!`);
    }

    const videoSize = fs.statSync(filePath).size;
    // Get the requested range.
    const range = req.headers.range;

    // 2. If no range is requested (first load), send the first chunk
    if(!range){
        const headers = {
            'Content-Length': videoSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, headers);
        return fs.createReadStream(filePath).pipe(res);
    }

    // 3. Parse Range (e.g., "bytes=32324-")
    const CHUNK_SIZE = 10 ** 6; // 1MB chunks
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };

    // 4. HTTP 206: Partial Content
    res.writeHead(206, headers);

    // 5. Stream only the requested byte range
    const videoStream = fs.createReadStream(filePath, { start, end });

    videoStream.pipe(res);

    // Error handling to prevent server crash on interrupted stream
    videoStream.on('error', (err) => {
        console.error("Stream Error:", err);
        res.end();
    });
});

app.listen(
    PORT,
    () => console.log(`Streaming Server on Port ${PORT}`)
);


//
// 1. Use PM2 (Process Manager)
// On your EC2 instance, use PM2 to keep the app alive and utilize all
// CPU cores (Cluster Mode).

"npm install pm2 -g"
"pm2 start server.js -i max" # Runs one instance per CPU core


// 2. Reverse Proxy (Nginx)
// Do not expose Node.js directly to the internet. Put Nginx in front.
// Why? It handles SSL (HTTPS) much faster than Node, buffers slow
// clients, and provides better security headers.


// 3. use FFmpeg to convert videos into HLS (m3u8).
// Why? HLS breaks the video into thousands of 2-second fragments.
// This allows "Adaptive Bitrate Streaming"—if the user's internet
// gets slow, the player automatically switches to a lower resolution
// without stopping the video.
*/
