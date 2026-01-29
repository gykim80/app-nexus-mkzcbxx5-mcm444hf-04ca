import React from 'react';
import { BarChart3, Shield, Zap, Globe, Users, Smartphone } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: '실시간 분석',
    description: '비즈니스 성과를 실시간으로 모니터링하고 데이터 기반 의사결정을 내리세요.',
    color: 'text-blue-500'
  },
  {
    icon: Shield,
    title: '보안 강화',
    description: '엔터프라이즈급 보안으로 고객 데이터와 비즈니스 정보를 안전하게 보호합니다.',
    color: 'text-green-500'
  },
  {
    icon: Zap,
    title: '자동화 기능',
    description: '반복적인 업무를 자동화하여 팀의 생산성을 극대화하고 시간을 절약하세요.',
    color: 'text-yellow-500'
  },
  {
    icon: Globe,
    title: '글로벌 확장',
    description: '다국가 지원과 현지화 기능으로 전 세계 시장으로 비즈니스를 확장하세요.',
    color: 'text-purple-500'
  },
  {
    icon: Users,
    title: '협업 도구',
    description: '팀원들과 실시간으로 협업하고 프로젝트를 효율적으로 관리할 수 있습니다.',
    color: 'text-red-500'
  },
  {
    icon: Smartphone,
    title: '모바일 최적화',
    description: '언제 어디서나 모바일 기기로 비즈니스를 관리하고 고객과 소통하세요.',
    color: 'text-indigo-500'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            왜 <span className="text-red-600">NEXUS</span>인가?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            현대 비즈니스가 요구하는 모든 기능을 하나의 플랫폼에서 제공합니다.
            성장하는 기업을 위한 완벽한 솔루션을 경험해보세요.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-1 bg-red-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              지금 시작해보세요
            </h3>
            <p className="text-xl mb-6 text-red-100">
              30일 무료 체험으로 NEXUS의 모든 기능을 경험해보세요
            </p>
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              무료 체험 시작하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}