import React, { useState } from 'react';
import { Users, UserPlus, Calendar, MessageSquare, BarChart, CheckCircle } from 'lucide-react';

const teamMembers = [
  { id: 1, name: '김민수', role: '프로젝트 매니저', status: '온라인', avatar: 'bg-blue-500' },
  { id: 2, name: '이지은', role: '디자이너', status: '회의중', avatar: 'bg-purple-500' },
  { id: 3, name: '박준호', role: '개발자', status: '온라인', avatar: 'bg-green-500' },
  { id: 4, name: '최수영', role: '마케터', status: '오프라인', avatar: 'bg-orange-500' }
];

const projects = [
  { id: 1, name: '웹사이트 리뉴얼', progress: 75, status: '진행중' },
  { id: 2, name: '모바일 앱 개발', progress: 40, status: '진행중' },
  { id: 3, name: '마케팅 캠페인', progress: 90, status: '완료 임박' }
];

export default function TeamManagement() {
  const [activeTab, setActiveTab] = useState('team');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            팀 관리 시스템
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            팀원들의 업무 현황을 실시간으로 파악하고, 프로젝트 진행 상황을 한눈에 관리하세요.
            효율적인 협업으로 더 나은 결과를 만들어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('team')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === 'team'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span className="font-medium">팀 멤버</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === 'projects'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <BarChart className="w-5 h-5" />
                  <span className="font-medium">프로젝트</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('calendar')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === 'calendar'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">일정 관리</span>
                </button>
              </nav>

              <div className="mt-8 p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white">
                <h4 className="font-semibold mb-2">팀 성과</h4>
                <p className="text-sm text-red-100 mb-3">이번 달 목표 달성률</p>
                <div className="bg-white/20 rounded-full h-2 mb-2">
                  <div className="bg-white rounded-full h-2 w-4/5"></div>
                </div>
                <p className="text-sm font-medium">80% 완료</p>
              </div>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              {/* Team Members Tab */}
              {activeTab === 'team' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">팀 멤버</h3>
                    <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      <UserPlus className="w-4 h-4" />
                      <span>멤버 추가</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {teamMembers.map(member => (
                      <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${member.avatar} rounded-full flex items-center justify-center text-white font-semibold`}>
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{member.name}</h4>
                            <p className="text-gray-600">{member.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            member.status === '온라인' ? 'bg-green-100 text-green-800' :
                            member.status === '회의중' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {member.status}
                          </span>
                          <button className="p-2 text-gray-400 hover:text-gray-600">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === 'projects' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">진행 중인 프로젝트</h3>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      새 프로젝트
                    </button>
                  </div>

                  <div className="space-y-4">
                    {projects.map(project => (
                      <div key={project.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-800">{project.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === '완료 임박' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>진행률</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-red-600 rounded-full h-2 transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Calendar Tab */}
              {activeTab === 'calendar' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">일정 관리</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">팀 미팅</h4>
                          <p className="text-gray-600">오늘 오후 2:00</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">프로젝트 리뷰</h4>
                          <p className="text-gray-600">내일 오전 10:00</p>
                        </div>
                        <Calendar className="w-5 h-5 text-yellow-500" />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">클라이언트 미팅</h4>
                          <p className="text-gray-600">금요일 오후 3:00</p>
                        </div>
                        <Users className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
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