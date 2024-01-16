import React from 'react';

interface Stories {
  title: string;
  link: string;
}

const STORIES: Stories[] = [
  {
    title: 'APISIX GATEWAY Configuration and Route Orchestration',
    link: 'https://medium.com/yavar/apisix-gateway-configuration-and-route-orchestration-27de7ed05cc6'
  },
  {
    title: 'Matrix synapse SSO implementation',
    link: 'https://medium.com/yavar/matrix-synapse-sso-implementation-e55b4318e5d0'
  },
  {
    title: 'O  — In the SOLID principle',
    link: 'https://medium.com/yavar/o-in-the-solid-principle-a95aa05f3fbd'
  },
  {
    title: 'S — In the SOLID principle',
    link: 'https://medium.com/yavar/s-in-the-solid-principle-7f46ca20c0f1'
  },
  {
    title: 'Call stack and heap memory in JavaScript',
    link: 'https://medium.com/yavar/call-stack-and-heap-memory-in-javascript-4151069c1f9'
  },
  {
    title: 'IKIGAI — Book review',
    link: 'https://medium.com/yavar/ikigai-book-review-b4a866580013'
  },
  {
    title: 'Introduction to distributed computing',
    link: 'https://medium.com/yavar/introduction-to-distributed-computing-f26f2a097741'
  },
  {
    title: 'Introduction to Nodejs with Kafka',
    link: 'https://medium.com/yavar/introduction-to-nodejs-with-kafka-d83bb20bd2a2'
  },
  {
    title: 'Architecture of Elasticsearch',
    link: 'https://medium.com/yavar/architecture-of-elasticsearch-a70e2f506d8b'
  },
  {
    title: 'Introduction to Elasticsearch',
    link: 'https://medium.com/yavar/introduction-to-elasticsearch-5bc02ec4d2b8'
  },
  {
    title: 'Introduction to NestJS',
    link: 'https://medium.com/yavar/introduction-to-nestjs-440e76e687a6'
  },
  {
    title: 'Why Software Architecture',
    link: 'https://medium.com/yavar/why-software-architecture-7b43b6808eb8'
  },
  {
    title: 'Nodejs Fundamentals',
    link: 'https://medium.com/@edisondevadoss/nodejs-fundamentals-d0e3754e3848'
  },
  {
    title: 'Understanding of TimescaleDB',
    link: 'https://medium.com/@edisondevadoss/understanding-of-timescaledb-91c420331483'
  },
  {
    title: 'Fastify Server-Sent Events(SSE)',
    link: 'https://medium.com/@edisondevadoss/fastify-server-sent-events-sse-93de994e013b'
  },
  {
    title: 'Veronika Decides to Die — Book review',
    link: 'https://medium.com/@edisondevadoss/veronika-decides-to-die-book-review-a370a38dbfef'
  },
  {
    title: 'Understanding of AWS IoT Core and WebSocket',
    link: 'https://medium.com/@edisondevadoss/understanding-of-aws-iot-core-and-websocket-d58453d788e5'
  },
  {
    title: 'Fastify writes logs to a Syslog file',
    link: 'https://medium.com/@edisondevadoss/fastify-writes-logs-to-a-syslog-file-ab069e7a3509'
  }
];

const BlogPosts = () => {
  return (
    <div className="mt-10 mb-4">
      <div className="max-w-screen-xl mx-auto bg-white rounded shadow-xl overflow-hidden md:max-w-screen-2xl">
        {/* Green Header */}
        <div className="bg-green h-36 flex justify-center items-center">
          <h1 className="text-center text-white font-bold text-2xl md:text-4xl">
            My Medium Blogs
          </h1>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 m-4 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((row: Stories, index: number) => {
            return (
              <div key={row.link} className="bg-white p-8 rounded shadow-md">
                <a href={row.link} target="_blank" rel="noopener noreferrer">
                  <h3>{row.title}</h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
