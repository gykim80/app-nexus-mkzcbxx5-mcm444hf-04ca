import React from 'react';
import { ArrowRight, Building2, Users, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-800 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-xl mb-6 shadow-2xl">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              NEXUS
            </h1>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            비즈니스의 새로운 연결고리
            <br />
            <span className="text-red-400">혁신적인 솔루션</span>
          </h2>
          
          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            NEXUS는 기업의 성장을 위한 완전한 디지털 플랫폼입니다.
            팀 관리부터 고객 소통까지, 모든 비즈니스 프로세스를 하나로 연결합니다.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="w-6 h-6 text-red-400" />
              <span className="text-lg font-medium">팀 관리 시스템</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Mail className="w-6 h-6 text-red-400" />
              <span className="text-lg font-medium">이메일 마케팅</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Building2 className="w-6 h-6 text-red-400" />
              <span className="text-lg font-medium">통합 대시보드</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2">
              <span>무료 체험 시작</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              제품 둘러보기
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto text-slate-50">
          <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}