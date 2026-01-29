import React, { useState } from 'react';
import { Mail, Send, Users, BarChart3, Target, Zap } from 'lucide-react';

const campaigns = [
  { id: 1, name: '신제품 런칭', sent: 2500, opened: 1875, clicked: 562, rate: '75%' },
  { id: 2, name: '고객 만족도 조사', sent: 1200, opened: 960, clicked: 288, rate: '80%' },
  { id: 3, name: '월간 뉴스레터', sent: 5000, opened: 3500, clicked: 1050, rate: '70%' }
];

const templates = [
  { id: 1, name: '환영 메시지', type: '자동화', preview: 'bg-blue-100' },
  { id: 2, name: '제품 소개', type: '프로모션', preview: 'bg-purple-100' },
  { id: 3, name: '이벤트 초대', type: '마케팅', preview: 'bg-green-100' }
];

export default function EmailShowcase() {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            이메일 마케팅 플랫폼
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            강력한 이메일 마케팅 도구로 고객과의 소통을 극대화하세요.
            개인화된 메시지로 더 높은 참여율과 전환율을 달성할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">메뉴</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveView('dashboard')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeView === 'dashboard'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>대시보드</span>
                </button>
                
                <button
                  onClick={() => setActiveView('campaigns')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeView === 'campaigns'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>캠페인</span>
                </button>
                
                <button
                  onClick={() => setActiveView('templates')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeView === 'templates'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>템플릿</span>
                </button>
              </nav>

              <div className="mt-8 p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                <h4 className="font-semibold mb-2">이번 달 성과</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-red-100">발송</span>
                    <span className="font-medium">8,700</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-100">오픈율</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-100">클릭율</span>
                    <span className="font-medium">22%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-xl">
              {/* Dashboard View */}
              {activeView === 'dashboard' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">이메일 마케팅 대시보드</h3>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-600 text-sm font-medium">총 구독자</p>
                          <p className="text-2xl font-bold text-blue-900">12,547</p>
                        </div>
                        <Users className="w-8 h-8 text-blue-500" />
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-600 text-sm font-medium">평균 오픈율</p>
                          <p className="text-2xl font-bold text-green-900">75.2%</p>
                        </div>
                        <Target className="w-8 h-8 text-green-500" />
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-600 text-sm font-medium">월 발송량</p>
                          <p className="text-2xl font-bold text-purple-900">8,700</p>
                        </div>
                        <Zap className="w-8 h-8 text-purple-500" />
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-4">최근 활동</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">신제품 런칭 캠페인이 성공적으로 발송되었습니다</span>
                        <span className="text-sm text-gray-400">2시간 전</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">새로운 구독자 47명이 추가되었습니다</span>
                        <span className="text-sm text-gray-400">4시간 전</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-600">월간 뉴스레터 템플릿이 업데이트되었습니다</span>
                        <span className="text-sm text-gray-400">1일 전</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Campaigns View */}
              {activeView === 'campaigns' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">캠페인 관리</h3>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      새 캠페인 만들기
                    </button>
                  </div>

                  <div className="space-y-4">
                    {campaigns.map(campaign => (
                      <div key={campaign.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-gray-800">{campaign.name}</h4>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            완료
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">발송</p>
                            <p className="font-semibold text-gray-800">{campaign.sent.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">오픈</p>
                            <p className="font-semibold text-gray-800">{campaign.opened.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">클릭</p>
                            <p className="font-semibold text-gray-800">{campaign.clicked.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">오픈율</p>
                            <p className="font-semibold text-green-600">{campaign.rate}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Templates View */}
              {activeView === 'templates' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">이메일 템플릿</h3>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      새 템플릿 만들기
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {templates.map(template => (
                      <div key={template.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
                        <div className={`${template.preview} h-32 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                          <Mail className="w-8 h-8 text-gray-500" />
                        </div>
                        
                        <h4 className="font-semibold text-gray-800 mb-2">{template.name}</h4>
                        <p className="text-sm text-gray-500 mb-4">{template.type}</p>
                        
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                            편집
                          </button>
                          <button className="flex-1 bg-red-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-red-700 transition-colors">
                            사용
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}