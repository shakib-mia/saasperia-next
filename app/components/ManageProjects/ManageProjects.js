import Image from "next/image";
import React from "react";
import manageProjects from "./../../assets/images/manage-projects.webp";
import manageProjectsBg from "./../../assets/images/manage-projects-bg.webp";

const ManageProjects = () => {
  return (
    //    <!-- Manage Your Projects -->
    <section id="features">
      <div className="container">
        {/* <!-- Section Heading & Intro --> */}
        <div className="lg:w-1/2 mx-auto text-center">
          <h3 className="lg:mb-4" data-animate="fade-in-left">
            Manage your projects fast
          </h3>
          <p data-animate="fade-in-left">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        {/* <!-- Content Grid --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 gap-7 items-center">
          {/* <!-- Left Column: Video Placeholder with Play Button --> */}
          <aside
            className="relative bg-cover bg-no-repeat"
            data-animate="fade-in-left"
            style={{ backgroundImage: `url(${manageProjectsBg.src})` }}
          >
            <Image src={manageProjects} className="mx-auto w-full" alt="" />
          </aside>

          {/* <!-- Right Column: Features List --> */}
          <aside>
            <ul className="space-y-4 lg:space-y-7">
              {/* <!-- Feature Item 1 --> */}
              <li
                className="flex items-start gap-4"
                data-animate="fade-in-right"
                data-delay="100"
              >
                {/* <!-- Number Icon --> */}
                <div className="w-1/10 aspect-square bg-light/20 rounded-full flex justify-center items-center text-primary">
                  1
                </div>
                {/* <!-- Text Content --> */}
                <aside className="w-9/10">
                  <h6>Create a project</h6>
                  <p className="mt-2">
                    Plan your project, define goals clearly, and set achievable
                    deadlines for completion.
                  </p>
                </aside>
              </li>

              {/* <!-- Feature Item 2 --> */}
              <li
                className="flex items-start gap-4"
                data-animate="fade-in-right"
                data-delay="200"
              >
                <div className="w-1/10 aspect-square bg-light/20 rounded-full flex justify-center items-center text-primary">
                  2
                </div>
                <aside className="w-9/10">
                  <h6>Assign related people</h6>
                  <p className="mt-2">
                    Assign the right members to tasks based on skills, ensuring
                    smooth workflow efficiency.
                  </p>
                </aside>
              </li>

              {/* <!-- Feature Item 3 --> */}
              <li
                className="flex items-start gap-4"
                data-animate="fade-in-right"
                data-delay="300"
              >
                <div className="w-1/10 aspect-square bg-light/20 rounded-full flex justify-center items-center text-primary">
                  3
                </div>
                <aside className="w-9/10">
                  <h6>Make it done on-time</h6>
                  <p className="mt-2">
                    Track progress, resolve issues quickly, and complete each
                    project successfully on time
                  </p>
                </aside>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ManageProjects;
