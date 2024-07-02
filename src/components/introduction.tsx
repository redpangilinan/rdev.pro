import React from "react"

export function Introduction() {
  return (
    <div className="space-y-4 p-4">
      <p className="font-light text-muted-foreground">Welcome to /rdev!</p>
      <p className="font-light">
        I'm a full-stack developer and I love open-source, I enjoy building apps
        in the JavaScript ecosystem and I like learning new technologies.
      </p>
      <p className="font-light">
        My favorite tech stack for building apps is{" "}
        <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">React</span>, and{" "}
        <span className="font-semibold">TypeScript</span> for the frontend and{" "}
        <span className="font-semibold">Django</span> for the backend.
      </p>
      <p className="font-light">
        I currently work as a{" "}
        <span className="font-semibold">Software Engineer</span> at{" "}
        <span className="font-semibold">Hiraya Technology Solutions, Inc.</span>
      </p>
    </div>
  )
}
