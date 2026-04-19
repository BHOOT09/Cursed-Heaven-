import { motion, useScroll, useTransform } from "motion/react";
import { 
  Users, 
  ShieldAlert, 
  Star, 
  MessageSquare, 
  Ghost, 
  Skull, 
  Eye, 
  ChevronDown,
  Sparkles,
  Instagram
} from "lucide-react";
import { useState, useRef } from "react";

const StaffMember = ({ name, role, avatar }: { name: string, role: string, avatar: string, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group"
  >
    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-red-900/50 group-hover:border-red-600 transition-colors">
      <img src={avatar} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
    </div>
    <h3 className="font-serif text-xl font-bold text-white mb-1 tracking-tight">{name}</h3>
    <span className="text-red-500 text-xs uppercase tracking-widest mb-3 font-body font-semibold">{role}</span>
  </motion.div>
);

const Review = ({ name, content, rating, avatar }: { name: string, content: string, rating: number, avatar: string, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="glass-card p-6 rounded-2xl"
  >
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < rating ? "fill-red-600 text-red-600" : "text-gray-700"} />
      ))}
    </div>
    <p className="text-gray-300 italic mb-4 font-accent text-lg">"{content}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-red-900/50">
        <img src={avatar} alt={name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
      </div>
      <span className="text-white font-serif text-sm tracking-wide">{name}</span>
    </div>
  </motion.div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const owners = [
    { name: "Pihu", role: "SERVER OWNER", avatar: "https://cdn.discordapp.com/avatars/1123882318336102450/60e86ac58d15cd0649a7ea3a6d27627c.png?size=4096" },
    { name: "Bhoot", role: "SERVER OWNER", avatar: "https://cdn.discordapp.com/avatars/842615478048129037/7ece0178fadff509b40502431f598f0c.png?size=4096" },
    { name: "Hunter", role: "SERVER OWNER", avatar: "https://cdn.discordapp.com/avatars/1396893865528524980/b8a84553ddbf12b9d104107151b7b37f.png?size=4096" }
  ];

  const team = [
    { name: "Soya", role: "ADMINISTRATOR", avatar: "https://cdn.discordapp.com/avatars/1386401776126918787/f2745f6e2cdee528cf903a4db2a87dd6.png?size=4096" },
    { name: "Pyro", role: "ADMINISTRATOR", avatar: "https://cdn.discordapp.com/avatars/1276744820383158296/c5399610bae8501de3345f9c062b7b83.png?size=4096" },
    { name: "Bhootni", role: "MODERATOR", avatar: "https://cdn.discordapp.com/avatars/1401276923371323482/2a144e44dbd4738f721c3ea8d84bc1ef.png?size=4096" },
    { name: "Maki", role: "MODERATOR", avatar: "https://cdn.discordapp.com/avatars/1280084462025179198/1861bfae70b5bb601d2723a1c5def814.png?size=4096" }
  ];

  const reviews = [
    { name: "Roronoa Zoro", content: "Been in Cursed Heaven for a long time now, and it still feels just as nice as day one. The server is non-toxic, the staff are genuinely kind and helpful, and the owner is incredibly sweet and always makes everyone feel welcome. You can tell they’ve built this place with care—it’s just a really comforting space to be in.", rating: 5, avatar: "https://cdn.discordapp.com/avatars/1494232873010724915/03575b2ca8698861845b5670d1a59529.png?size=4096" },
    { name: "Foxxy", content: "I’ve been in this Discord server for almost a year now, and it honestly feels like a second home. The people here are really sweet, friendly, and easy to talk to. It’s a great place to relax, chat, and feel included. I genuinely enjoy being here and wouldn’t trade this experience for anything", rating: 5, avatar: "https://cdn.discordapp.com/avatars/861835142812794902/55b7a3a14b73cd801373a80dd3cd3078.png?size=4096" },
    { name: "Mr.krish", content: "It's been a year I have been in Cursed Heaven server and I cannot forgot the moments I lived here, the moments I enjoyed here with friends.", rating: 5, avatar: "https://cdn.discordapp.com/avatars/1356549130469642330/cb3b6d3447114312abc65b71ce8da979.png?size=4096" },
    { name: "Kala Jadu", content: "It's not been so long in this server for me. I see it pretty cool ngl cuz uk when someone enters a server some members start bullying the person and make them feel offended which is not here and people are pretty cool bout everything and not getting offended .", rating: 5, avatar: "https://cdn.discordapp.com/avatars/1198597749239717920/7fb4e3553dee445a943feacc7ca7ec14.png?size=4096" },
    { name: "Mishika", content: "The fun out of the server but also great at making members follow the discord community guidelines at the same time. lively banter and non offensive jokes are part of the servers at all times.", rating: 5, avatar: "https://cdn.discordapp.com/avatars/1137010943080013954/340e75175dcd3544f39a35bea353ffb4.png?size=4096" }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div className="atmosphere" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-2xl font-black tracking-tighter text-white uppercase flex items-center gap-2"
        >
          <Skull size={24} className="text-red-700" />
          Cursed <span className="text-red-700">Heaven</span>
        </motion.div>
        
        <ul className="hidden md:flex gap-10 items-center">
          {['About', 'Staff', 'Reviews'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.2em] font-body"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <a 
              href="https://discord.gg/3FJRNK7UAK" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,20,60,0.3)]"
            >
              Join Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="z-10"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-red-500 font-accent text-xl italic mb-4"
          >
            Welcome to the Abyss
          </motion.p>
          <h1 className="font-serif font-black text-6xl md:text-[8rem] lg:text-[10rem] leading-tight text-white uppercase tracking-tighter text-glow-red">
            Cursed <br /> <span className="text-gray-400 opacity-50">Heaven</span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="https://discord.gg/3FJRNK7UAK" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-white text-black font-bold uppercase text-sm tracking-widest rounded-sm overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enter the Gates <MessageSquare size={18} />
              </span>
              <motion.div 
                className="absolute inset-0 bg-red-700 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Icons Background Element */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <motion.div style={{ y: backgroundY }} className="flex justify-center items-center w-full h-full relative">
            <Ghost className="absolute top-[10%] left-[10%] w-32 h-32" />
            <Skull className="absolute bottom-[10%] right-[10%] w-48 h-48" />
            <Eye className="absolute top-[30%] right-[20%] w-20 h-20" />
            <Sparkles className="absolute bottom-[30%] left-[20%] w-16 h-16" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-6xl mx-auto relative h-fit">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-red-500 uppercase text-xs font-bold tracking-[0.3em]">The Prophecy</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-white mb-8 leading-tight uppercase">
              A SACRED SPACE FOR THE <span className="text-red-600">MISUNDERSTOOD</span>.
            </h2>
            <div className="space-y-6 text-gray-400 font-body text-lg leading-relaxed">
              <p>
                Cursed Heaven isn't just a server—it's a sanctuary for those who find beauty in the shadows. We built this space for the aesthetes, the thinkers, and the lost souls looking for a high-vibe community.
              </p>
              <p>
                Most comfortable and snuggly, server out there on discord, we have many things such as: Nitro's giveaways, music nights, friendly & welcoming atmosphere and much more!
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl glass-card relative group">
              <div className="absolute inset-0 bg-red-950/40 z-10 pointer-events-none group-hover:bg-red-900/10 transition-colors duration-700" />
              <img 
                src="https://cdn.discordapp.com/attachments/1215557048566030346/1495331580720447518/download_6.jpg?ex=69e5db8e&is=69e48a0e&hm=522072bbf02ebd5a4b5ea9f12c6e6f4dc729b5563b6f46d0a4be4f45c1325f1f&" 
                alt="Cursed Heaven Aesthetic" 
                className="w-full h-full object-cover rounded-2xl opacity-100 mix-blend-screen transition-all duration-1000 scale-100 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-32 px-6 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase text-xs font-bold tracking-[0.4em] mb-4">The Foundations</p>
            <h2 className="font-serif text-5xl font-black text-white uppercase">Owners</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-24">
            {owners.map((member) => (
              <div key={member.name} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                <StaffMember 
                  name={member.name} 
                  role={member.role} 
                  avatar={member.avatar} 
                />
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <p className="text-red-500 uppercase text-xs font-bold tracking-[0.4em] mb-4">The Sentinels</p>
            <h2 className="font-serif text-4xl font-black text-white uppercase">Staff Team</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member) => (
              <div key={member.name} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                <StaffMember 
                  name={member.name} 
                  role={member.role} 
                  avatar={member.avatar} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="md:w-1/3 md:sticky md:top-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-red-500 uppercase text-xs font-bold tracking-[0.3em]">Whispers</span>
            </div>
            <h2 className="font-serif text-4xl font-black text-white mb-6 uppercase">Testimonials</h2>
            <p className="text-gray-400 font-body">
              Words from those who entered and never wished to leave. Our community speaks for itself.
            </p>
          </div>
          <div className="md:w-2/3 grid gap-6">
            {reviews.map((rev) => (
              <Review 
                key={rev.name} 
                name={rev.name} 
                content={rev.content} 
                rating={rev.rating} 
                avatar={rev.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div>
            <div className="font-serif text-xl font-black tracking-tighter text-white uppercase flex items-center justify-center md:justify-start gap-2 mb-4">
              <Skull size={20} className="text-red-700" />
              Cursed Heaven
            </div>
            <p className="text-gray-600 text-sm max-w-xs font-body mx-auto md:mx-0">
              A digital haunt for the aesthetic elite. Founded in the shadows, nurtured in the abyss.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://discord.gg/3FJRNK7UAK" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest flex items-center gap-2">
              <MessageSquare size={14} /> Discord
            </a>
            <a href="https://www.instagram.com/cursed_heaven07/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest flex items-center gap-2">
              <Instagram size={14} /> Instagram
            </a>
          </div>
          
          <div className="text-gray-700 text-[10px] uppercase font-bold tracking-tighter">
            &copy; 2026 Cursed Heaven. Design by Bhoot.
          </div>
        </div>
      </footer>
    </div>
  );
}
