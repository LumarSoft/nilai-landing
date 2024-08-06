import { FramerComponent } from "../Framer/FramerComponent";

export const Card = ({
  icon,
  title,
  items,
  itemAnimado,
}: {
  icon: any;
  title: string;
  items: any[];
  itemAnimado: any;
}) => (
  <FramerComponent
    style="flex flex-col p-6 h-full bg-white rounded-lg border border-zinc-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    animationInitial={{ opacity: 0, y: 50 }}
    animationVariants={itemAnimado}
  >
    <div className="flex flex-col items-center mb-6">
      {icon}
      <h3 className="font-bold text-xl text-black">{title}</h3>
    </div>
    <ul className="text-gray-800 space-y-2 flex-grow">
      {items.map((item: any, index: number) => (
        <li key={index} className="flex items-start">
          <span className="text-black mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </FramerComponent>
);
