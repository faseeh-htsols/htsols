import { Button } from '@/components/ui/Button'
import Container from '@/components/ui/container'
import DoubleCurves from '@/components/ui/double-curves'
import React from 'react'

interface HowWorksData {
    data: {
        title: string;
        para: string;
        firstBtnText: string;
        firstBtnLink: string;
        secondBtnText: string;
        secondBtnLink: string;
    }
}

const Cta = ({ data }: HowWorksData) => {
    return (
        <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
            <section className='bg-black pt-20'>
                <Container>
                    <div className="relative mt-10 overflow-hidden rounded-[10px] border border-white/25 bg-[linear-gradient(90deg,#075B65_0%,#00838A_50%,#328A99_100%)] px-5 py-10 md:px-10 md:py-12">
                        {/* top right bg image */}
                        <div className="pointer-events-none absolute right-0 top-0 h-[480px] w-[280px] bg-[url('/top-effect.webp')] bg-contain bg-no-repeat" />

                        {/* bottom left bg image */}
                        <div className="pointer-events-none absolute bottom-0 left-0 h-[180px] w-[180px] bg-[url('/bottom-effect.webp')] bg-contain bg-no-repeat" />

                        <div className="relative text-center">
                            <h3 className="font-primary text-[24px] font-semibold uppercase  text-white md:text-[30px]">
                                {data.title}
                            </h3>

                            <p className="mx-auto mt-4 w-full md:max-w-[80%] leading-[1.8] text-white">
                                {data.para}
                            </p>

                            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Button variant="white" href={data.firstBtnLink}>
                                    {data.firstBtnText}
                                </Button>

                                <Button variant="outline" href={data.secondBtnLink}>
                                    {data.secondBtnText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </DoubleCurves>
    )
}

export default Cta