import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TECH } from '@/constants/config';

type TechItemType = {
  title: string;
  children: React.ReactNode;
};

const TechItem = ({ title, children }: TechItemType) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="rounded-md border p-2.5">{children}</div>
      <span className="text-xs text-gray-600 dark:text-gray-400">{title}</span>
    </div>
  );
};

const TechSkills = () => {
  return (
    <section>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex flex-col space-y-1">
              <h3 className="text-lg font-medium">Technical Skills</h3>
              <p className="text-sm text-muted-foreground">
                Technologies I work with
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-4 gap-4 py-3 font-spaceGrotesk md:grid-cols-8">
            {TECH.map((item, index) => (
              <TechItem key={index} title={item.title}>
                <item.icon className="h-6 w-6 hover:text-primary" />
              </TechItem>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default TechSkills;
