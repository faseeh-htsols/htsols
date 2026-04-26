import Container from "@/components/ui/container";

export type LegalTable = {
  title?: string;
  headers: string[];
  rows: string[][];
};

export type LegalSubsection = {
  heading?: string;
  body?: string[];
  bullets?: string[];
};

export type LegalSection = {
  number: string;
  heading: string;
  short?: string;
  body?: string[];
  bullets?: string[];
  subsections?: LegalSubsection[];
  tables?: LegalTable[];
};

type LegalPageTemplateProps = {
  title: string;
  eyebrow?: string;
  meta: string[];
  sections: LegalSection[];
  footerNote?: string;
};

const renderParagraphs = (paragraphs?: string[]) =>
  paragraphs?.map((paragraph, index) => (
    <p key={index} className="text-white leading-relaxed whitespace-pre-line">
      {paragraph}
    </p>
  ));

const renderBullets = (bullets?: string[]) =>
  bullets && (
    <ul className="flex flex-col gap-1.5 mt-1">
      {bullets.map((bullet, index) => (
        <li key={index} className="flex gap-2 text-sm text-white leading-relaxed">
          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#075B65]" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );

const LegalPageTemplate = ({
  title,
  sections,
  footerNote,
}: LegalPageTemplateProps) => {
  return (
    <>
      <div className="h-[400px] relative">
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-primary">
            {title}
          </h1>
        </div>
      </div>

      <main className="min-h-screen py-20">
        <Container>
          <div className="flex flex-col gap-8">
            {sections.map((section) => (
              <section key={section.number} className="flex gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-tertiary flex items-center justify-center mt-0.5">
                  <span className="text-white">{section.number}</span>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <h2 className="font-semibold text-white text-[18px]">
                    {section.heading}
                  </h2>

                  {renderParagraphs(section.body)}
                  {renderBullets(section.bullets)}

                  {section.subsections?.map((subsection, index) => (
                    <div key={index} className="flex flex-col gap-2 pt-1">
                      {subsection.heading && (
                        <h3 className="text-white leading-relaxed font-semibold">
                          {subsection.heading}
                        </h3>
                      )}
                      {renderParagraphs(subsection.body)}
                      {renderBullets(subsection.bullets)}
                    </div>
                  ))}

                  {section.tables?.map((table, index) => (
                    <div key={index} className="overflow-x-auto pt-2">
                      {table.title && (
                        <h3 className="mb-3 text-white leading-relaxed font-semibold">
                          {table.title}
                        </h3>
                      )}
                      <table className="min-w-[720px] w-full border-collapse overflow-hidden rounded-md text-left text-sm text-white">
                        <thead className="bg-tertiary">
                          <tr>
                            {table.headers.map((header) => (
                              <th key={header} className="border border-white/10 px-4 py-3 font-semibold">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="odd:bg-white/[0.03]">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-white/10 px-4 py-3 align-top text-white/80">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {footerNote && (
              <p className="mt-6 text-center text-sm text-white/60">
                {footerNote}
              </p>
            )}
          </div>
        </Container>
      </main>
    </>
  );
};

export default LegalPageTemplate;
