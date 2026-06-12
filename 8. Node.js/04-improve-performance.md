## Improve Performance

### Optimize Code Architecture & Event Loop
1. **Use Node.js in Cluster Mode.(Recommended)**
   
   Scale vertically across all available hardware CPU cores.

   _Node.js uses single thread which uses single core of a CPU. But Clustering spawns a worker process that can utilize other available CPU core, making it a truely multi-threaded application._

   **Load balancer**: Distribute incoming network traffic across multiple servers using HAProxy or Cloudflare.

2. **Use Worker Threads.(Experimental)**

   Offload CPU-heavy computation like data encryption, image manipulation, or sorting arrays to Node's Worker Threads API to keep the main thread unblocked.

   _Uses the libuv's threadpool, to utilize threads as per our needs._

3. **Avoid synchronous I/O** 
   
   Never use functions like `fs.readFileSync()` in production because they pause the entire event loop.

4. **Leverage async/await** 
   
   Use promises and non-blocking asynchronous methods to keep the application responsive. _e.g. promise.all_.

5. **Use Streams for large data** 

   Process massive files, payloads, or logs chunk-by-chunk using Node.js streams instead of loading everything into memory simultaneously.

## Implement Strategic Caching
1. **Redis**
   
   Use Redis or Memcached to save frequently queried database data, session states, and computationally expensive API responses.

2. **NGINX**

   Put an NGINX server or Varnish as a reverse proxy in front of your Node app to cache full responses and serve static files directly.

3. **Request Deduplication**

   Use tools or logic to check if multiple identical HTTP requests are running simultaneously, fetching the data once and sharing the result across all waiting connections.

### Memory
1. **Tune V8 memory allocation** 

   If your application experiences heavy memory footprints, use the flag `--max-old-space-size` to adjust the garbage collection thresholds for optimal RAM usage.

2. **Gzip Compression**

   Compress the HTTP responses being sent from the server. Configure NGINX to use Gzip Compression on all JSON API repsonses, HTML, CSS, JS, SVG, XML files, or large files like plain text logs, etc.

### Database
1. **Optimize queries and connections** 

   Create database indexes on highly queried fields and maintain an active connection pool instead of creating fresh connections on every request.

   Gzip compression: Use the compression middleware in Express frameworks to compress response payloads before sending them over the wire.

### Measure and Profile
1. **Profilers & Monitoring**

   Use the built-in `V8 Profiler` or Application Performance Monitoring (APM) tools like Datadog, New Relic, or Raygun to uncover active bottlenecks.

---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > libuv](03-libuv.md)  

**Next:** → [Node.js > Cluster](05-cluster.md)

<!-- PAGINATION_END -->
