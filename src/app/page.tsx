'use client';

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Setup Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-scroll-section]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'Express', icon: '🚂', color: 'from-gray-400 to-slate-400' },
    { name: 'MySQL', icon: '🐬', color: 'from-orange-400 to-amber-400' },
  ];

  const hobbies = [
    { 
      name: 'Nuôi bồ câu', 
      icon: '🕊️', 
      desc: '40 con với nhiều giống: banh, gà, Pháp',
      color: 'from-purple-400 to-pink-400'
    },
    { 
      name: 'Câu cá', 
      icon: '🎣', 
      desc: 'Thư giãn và cân bằng cuộc sống',
      color: 'from-blue-400 to-indigo-400'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Avatar */}
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1 animate-gradient">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center text-xl animate-scaleIn" style={{ animationDelay: '0.5s' }}>
                  ✨
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Nguyễn Đinh Tuấn Khoa
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Sinh viên Công nghệ thông tin
            </p>
            
            <p className={`text-lg text-gray-600 dark:text-gray-400 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              🎓 Trường Đại học Trà Vinh (TVU) | 20 tuổi
            </p>

            {/* Tags */}
            <div className={`flex flex-wrap gap-3 justify-center mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium hover:scale-110 transition-transform cursor-default">
                🔥 Nhiệt huyết
              </span>
              <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium hover:scale-110 transition-transform cursor-default">
                📚 Ham học hỏi
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium hover:scale-110 transition-transform cursor-default">
                🚀 Tinh thần cầu tiến
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4" id="about" data-scroll-section>
        <div className="container mx-auto max-w-4xl">
          <div className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              💡 Về tôi
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Tôi là người yêu thích lập trình và luôn tìm kiếm cơ hội để học hỏi những công nghệ mới. 
              Đặc biệt quan tâm đến phát triển web với các công nghệ hiện đại như React, Node.js, Express và MySQL.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Tôi đam mê tìm hiểu về cơ sở dữ liệu, kiến trúc phần mềm, và thích thực hành qua các dự án thực tế 
              để không ngừng nâng cao kỹ năng lập trình của mình.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4" id="skills" data-scroll-section>
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            🛠️ Kỹ năng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: visibleSections.has('skills') ? `${index * 150}ms` : '0ms' }}
              >
                <div className={`text-5xl mb-4 group-hover:scale-125 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
                <div className={`h-2 rounded-full bg-gradient-to-r ${skill.color} group-hover:h-3 transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16 px-4" id="hobbies" data-scroll-section>
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${visibleSections.has('hobbies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            🎯 Sở thích
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.name}
                className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${visibleSections.has('hobbies') ? 'opacity-100 translate-x-0' : index === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'}`}
                style={{ transitionDelay: visibleSections.has('hobbies') ? `${index * 200}ms` : '0ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-6xl group-hover:scale-110 transition-transform duration-300 animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                    {hobby.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                      {hobby.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      {hobby.desc}
                    </p>
                    <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${hobby.color} group-hover:h-2 transition-all duration-300`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-700/50 transition-all duration-1000 ${visibleSections.has('hobbies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: visibleSections.has('hobbies') ? '400ms' : '0ms' }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              💼 Nuôi bồ câu không chỉ mang lại thu nhập mà còn là niềm vui và cách thư giãn sau giờ học. 
              Câu cá giúp tôi cân bằng cuộc sống và tái tạo năng lượng.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 px-4 pb-24" id="goals" data-scroll-section>
        <div className="container mx-auto max-w-4xl">
          <div className={`bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white transition-all duration-1000 ${visibleSections.has('goals') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="animate-float">🎯</span>
              Mục tiêu tương lai
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <div className={`flex items-start gap-3 hover:translate-x-2 transition-all duration-700 ${visibleSections.has('goals') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: visibleSections.has('goals') ? '200ms' : '0ms' }}
              >
                <span className="text-2xl">✅</span>
                <p>Có một công việc ổn định trong ngành Công nghệ thông tin</p>
              </div>
              <div className={`flex items-start gap-3 hover:translate-x-2 transition-all duration-700 ${visibleSections.has('goals') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: visibleSections.has('goals') ? '400ms' : '0ms' }}
              >
                <span className="text-2xl">✅</span>
                <p>Phát triển bản thân, trở thành một lập trình viên chuyên nghiệp</p>
              </div>
              <div className={`flex items-start gap-3 hover:translate-x-2 transition-all duration-700 ${visibleSections.has('goals') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: visibleSections.has('goals') ? '600ms' : '0ms' }}
              >
                <span className="text-2xl">✅</span>
                <p>Tiếp tục theo đuổi và cân bằng giữa đam mê công nghệ và sở thích cá nhân</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            ✨ Cảm ơn bạn đã ghé thăm! | Made with ❤️ by Tuấn Khoa
          </p>
        </div>
      </footer>
    </div>
  );
}
