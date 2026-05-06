import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

type Author = {
  name: string;
  pictureUrl: string;
  bio: string;
  scheduledDate: string;
};

function AuthorCard({ author, date }: { author: Author; date?: string }) {
  const { name, pictureUrl, bio } = author || {};
  return (
    <section className="py-10 bg-tertiary">
      <Container>
        <div className="">
          <div className="flex lg:flex-row flex-col items-center gap-4">
            <div className="bg-primary flex justify-center items-center w-[200px] h-[200px] shrink-0 rounded-full">
              <Image
                src={pictureUrl || "/user-placeholder.webp"}
                alt={name || "Author"}
                width={1000}
                height={1000}
                className="h-[100px] w-[160px] object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold lg:text-left text-center font-primary text-primary">
                {name}
              </h2>

              {bio && (
                <p className="mt-2  lg:text-left text-center leading-relaxed">
                  {bio}
                </p>
              )}
              {date && (
                <p className="mt-2 text-2xl text-assistant lg:justify-start justify-center flex gap-2 items-center leading-relaxed">
                  <span>
                    <Image
                      src={"/date-blog.svg"}
                      alt="date icon"
                      width={100}
                      height={100}
                      className="w-[30px] h-[30px]"
                      quality={100}
                    />
                  </span>
                  {new Date(author.scheduledDate)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(" ", " ")
                    .replace(" ", ", ")}
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AuthorCard;
