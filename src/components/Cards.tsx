export default function Cards() {
  const cards = [
    {
      title: "Card 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, porro quod sapiente repellat suscipit facere?",
      date: "27/09/2000",
    },
    {
      title: "Card 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, porro quod sapiente repellat suscipit facere?",
      date: "27/09/2000",
    },
    {
      title: "Card 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, porro quod sapiente repellat suscipit facere?",
      date: "27/09/2000",
    },

    {
      title: "Card 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, porro quod sapiente repellat suscipit facere?",
      date: "27/09/2000",
    },
    {
      title: "Card 5",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, porro quod sapiente repellat suscipit facere?",
      date: "27/09/2000",
    },
    {
      title: "Card 6",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, porro quod sapiente repellat suscipit facere?",
      date: "27/09/2000",
    },
  ];
  return (
    <main className="p-3 dark:bg-gray-900 "> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card)=>(
            <div className="flex flex-col items-center justify-center bg-gray-100 p-3 dark:bg-gray-700 dark:text-gray-100 rounded-2xl shadow-md space-y-5">
                <h2 className="font-bold text-3xl"> {card.title} </h2>
                <p > {card.desc} </p>
                <p className="text-[12px] w-full text-right"> {card.date} </p>
            </div>
        ))}
      </div>
    </main>
  );
}
