import Image from 'next/image';

import AjayFullPose from '/images/ajay-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={AjayFullPose}
              alt="Fullpose of Ajay"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate frontend-focused full stack developer with strong experience in building modern, scalable web applications using React.js, Next.js, JavaScript, and TypeScript.
            I enjoy transforming ideas into intuitive, high-quality digital experiences by combining clean UI, solid architecture, and well-structured, performant code.
            Attention to user experience, responsiveness, and maintainable code is central to how I work.
            I began my professional journey as a web developer over 3+ years ago, and since then I&apos;ve continuously grown by working on real-world products, modernizing existing systems, and delivering features on live production applications.
            Today, I work extensively with technologies such as React, Next.js, Redux, Context API, Tailwind CSS, REST APIs, Firebase, and related tooling to build reliable, user-centric solutions.
            I&apos;m a progressive thinker who enjoys owning features end to end — from understanding requirements and designing components to implementing, optimizing, and shipping production-ready code.
          </Typography>




          <Typography>
            You can follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              LinkedIn
            </Link>{' '}
            or {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Tech in Computer Science & Engineering
              </Typography>
              {/* <Typography component="li">Full time freelancer</Typography> */}
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              {/* <Typography component="li">Aspiring indie hacker</Typography> */}
            </ul>
          </div>
          <Typography>
            I’m always open to meaningful conversations and opportunities,
            and I’m actively seeking a full-time role where I can apply
            my skills and grow with a collaborative team. 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
