import { Resume, ResumeItem } from "@/types/sanity"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"
import { Briefcase } from "lucide-react"

interface TimelineItemProps {
    item: ResumeItem
}

function TimelineItemComponent({ item }: TimelineItemProps) {
    return (
        <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
            <div className="text-sm text-muted-foreground mb-2">{item.period}</div>
            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
            <div className="text-sm text-muted-foreground mb-3">
                Course by <span className="font-medium">{item.organization}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
            </p>
        </div>
    )
}

interface WorkEducationSectionProps {
    data: Resume
}

export function WorkEducationSection({ data }: WorkEducationSectionProps) {
    return (
        <FadeInSection>
            <section id="education" className="mb-32">
                <SectionBadge icon={<Briefcase className="w-4 h-4" />} className="mb-8">
                    Resume
                </SectionBadge>

                <h2 className="text-3xl sm:text-4xl font-bold mb-6">{data.title}</h2>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                    {data.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Work Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
                        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-4 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-border">
                            {data.work?.map((item) => (
                                <TimelineItemComponent key={item._key} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8">Education</h3>
                        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-4 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-border">
                            {data.education?.map((item) => (
                                <TimelineItemComponent key={item._key} item={item} />
                            ))}
                        </div>


                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-8">Certifications & Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Split certifications into two columns manually for better control */}
                        {(() => {
                            const certs = data.certifications || [];
                            const midpoint = Math.ceil(certs.length / 2);
                            const leftColumn = certs.slice(0, midpoint);
                            const rightColumn = certs.slice(midpoint);

                            return (
                                <>
                                    {/* Left Column */}
                                    <div className="relative space-y-8 before:absolute before:left-[7px] before:top-4 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-border">
                                        {leftColumn.map((item) => (
                                            <TimelineItemComponent key={item._key} item={item} />
                                        ))}
                                    </div>

                                    {/* Right Column */}
                                    {rightColumn.length > 0 && (
                                        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-4 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-border">
                                            {rightColumn.map((item) => (
                                                <TimelineItemComponent key={item._key} item={item} />
                                            ))}
                                        </div>
                                    )}
                                </>
                            );
                        })()}
                    </div>
                    {data.linkedinUrl && (
                        <a
                            href={data.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors mt-8"
                        >
                            View on LinkedIn →
                        </a>
                    )}
                </div>
            </section>
        </FadeInSection>
    )
}
