import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Swamp
      </h1>
      <div
        className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"
        style={{
          backgroundImage: "url('/shrek-swamp.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
        }}
      >
        <p>Welcome to my Swamp</p>
      </div>
    </>
  );
}
