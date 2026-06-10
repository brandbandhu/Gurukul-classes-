import { createFileRoute } from "@tanstack/react-router";
import { CoursePageLayout } from "@/components/CoursePageLayout";
import { COURSE_BY_SLUG } from "@/data/site";

const course = COURSE_BY_SLUG["mh-cet"];

export const Route = createFileRoute("/courses/mh-cet")({
  head: () => ({
    meta: [
      { title: `${course.title} — Gurukul Science Classes` },
      { name: "description", content: course.description },
      { property: "og:title", content: course.title },
      { property: "og:description", content: course.description },
      { property: "og:url", content: course.path },
    ],
    links: [{ rel: "canonical", href: course.path }],
  }),
  component: () => <CoursePageLayout course={course} />,
});