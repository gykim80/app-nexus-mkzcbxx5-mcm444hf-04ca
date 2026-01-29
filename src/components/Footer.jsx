import React from 'react';
import { Building2, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">NEXUS</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              비즈니스의 새로운 연결고리, NEXUS와 함께 성장하세요.
              혁신적인 솔루션으로 더 나은 미래를 만들어갑니다.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">제품</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">팀 관리 시스템</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">이메일 마케팅</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">프로젝트 관리</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">고객 관리</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">분석 도구</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">회사</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">회사 소개</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">채용 정보</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">언론 보도</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">파트너십</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">투자자 정보</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">연락처</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">서울특별시 강남구 테헤란로 123</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">02-1234-5678</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">contact@nexus.co.kr</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">뉴스레터 구독</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-lg transition-colors">
                  구독
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NEXUS. 모든 권리 보유.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">개인정보처리방침</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">이용약관</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">쿠키 정책</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">고객지원</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
          <Mail className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}