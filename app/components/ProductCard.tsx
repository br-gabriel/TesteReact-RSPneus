import Image from "next/image";

type Props = {
  name: string;
  image: string;
  model: string;
  treadwear: number;
  traction: string;
  temperature: string;
  speedRating: string;
  loadIndex: string;
  pattern: string;
};

export default function ProductCard({
  name,
  image,
  model,
  treadwear,
  traction,
  temperature,
  speedRating,
  loadIndex,
  pattern,
}: Props) {
  return (
    <div data-testid="product" className="flex flex-col md:flex-row justify-center gap-4 mb-8 py-3 px-4 md:pr-12 md:pl-6 rounded-2xl w-full shadow-[rgba(0,0,0,0.2)_4px_4px_4px_0px]">
      <div className="flex flex-col justify-center items-center text-center font-bold text-xl">
        <Image src={image} alt={model} width={180} height={380} />
        <p>{model}</p>
      </div>

      <div className="md:my-4 border-b-4 md:border-r-4 border-black"></div>

      <div className="flex flex-col justify-center">
        <p className="font-bold text-2xl">{name}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-row-3 md:grid-rows-2 gap-4 mt-4">
          <div>
            <p className="text-gray-500 font-light">Durabilidade</p>
            <b>{treadwear}</b>
          </div>

          <div>
            <p className="text-gray-500 font-light">Tração</p>
            <b>{traction}</b>
          </div>

          <div>
            <p className="text-gray-500 font-light">Temperatura</p>
            <b>{temperature}</b>
          </div>

          <div>
            <p className="text-gray-500 font-light">Índice de velocidade</p>
            <b>{speedRating}</b>
          </div>

          <div>
            <p className="text-gray-500 font-light">Capacidade de carga</p>
            <b>{loadIndex}</b>
          </div>

          <div>
            <p className="text-gray-500 font-light">Desenho</p>
            <b>{pattern}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
