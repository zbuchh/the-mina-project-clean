'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Mic, MicOff, MessageCircle, Heart, Globe, Phone } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const ChatbotPage = () => {
  const { t, language } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: language === 'ar' 
        ? 'مرحباً! أنا مساعد الصحة الخاص بك. كيف يمكنني مساعدتك اليوم؟'
        : language === 'es'
        ? '¡Hola! Soy tu asistente de salud. ¿Cómo puedo ayudarte hoy?'
        : language === 'ps'
        ? 'سلام! زه ستاسو د روغتیا مرستیال یم. نن موږ څنګه مرسته کولی شم؟'
        : 'Hello! I\'m your health assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        en: [
          'I understand your concern. Let me help you find the right information.',
          'Based on your question, I recommend consulting with a healthcare provider.',
          'Here are some resources that might help you with your health concern.',
          'I can help you find local healthcare providers who speak your language.'
        ],
        ar: [
          'أفهم قلقك. دعني أساعدك في العثور على المعلومات الصحيحة.',
          'بناءً على سؤالك، أنصحك بالاستشارة مع مقدم رعاية صحية.',
          'إليك بعض الموارد التي قد تساعدك في مشكلتك الصحية.',
          'يمكنني مساعدتك في العثور على مقدمي رعاية صحية محليين يتحدثون لغتك.'
        ],
        es: [
          'Entiendo tu preocupación. Déjame ayudarte a encontrar la información correcta.',
          'Basándome en tu pregunta, te recomiendo consultar con un proveedor de salud.',
          'Aquí tienes algunos recursos que podrían ayudarte con tu preocupación de salud.',
          'Puedo ayudarte a encontrar proveedores de salud locales que hablen tu idioma.'
        ],
        ps: [
          'زه ستاسو اندیښنه پوهیږم. راځئ چې تاسو سره د سم معلوماتو موندلو کې مرسته وکړم.',
          'د ستاسو پوښتنې پر بنسټ، زه تاسو ته د روغتیا د خدمتونو وړاندې کوونکي سره مشوره ورکول غواړم.',
          'دلته ځینې سرچینې دي چې کولی شي ستاسو د روغتیا اندیښنو سره مرسته وکړي.',
          'زه کولی شم تاسو سره د هغو سیمه ییزو روغتیا خدمتونو وړاندې کوونکو موندلو کې مرسته وکړم چې ستاسو ژبه ویلای شي.'
        ]
      }

      const randomResponse = responses[language as keyof typeof responses]?.[
        Math.floor(Math.random() * responses[language as keyof typeof responses].length)
      ] || responses.en[0]

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleVoiceInput = () => {
    setIsListening(!isListening)
    // Voice input functionality would be implemented here
  }

  const quickQuestions = {
    en: [
      'How do I find a doctor who speaks my language?',
      'What insurance do I need?',
      'Where can I get emergency care?',
      'How do I make an appointment?'
    ],
    ar: [
      'كيف أجد طبيباً يتحدث لغتي؟',
      'ما نوع التأمين الذي أحتاجه؟',
      'أين يمكنني الحصول على رعاية طوارئ؟',
      'كيف أحجز موعداً؟'
    ],
    es: [
      '¿Cómo encuentro un doctor que hable mi idioma?',
      '¿Qué seguro necesito?',
      '¿Dónde puedo obtener atención de emergencia?',
      '¿Cómo hago una cita?'
    ],
    ps: [
      'زه څنګه یو ډاکټر ومومم چې زما ژبه ویلای شي؟',
      'زه کوم بیمه اړین یم؟',
      'زه څه وخت کولی شم د اورګانې پاملرنې ترلاسه کړم؟',
      'زه څنګه یوه ناسته ترتیب کړم؟'
    ]
  }

  return (
    <div className="min-h-screen bg-warm-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MessageCircle className="h-8 w-8 text-warm-orange" />
            <h1 className="text-3xl font-bold text-gray-900">
              {language === 'ar' ? 'مساعد الصحة' : 
               language === 'es' ? 'Asistente de Salud' :
               language === 'ps' ? 'د روغتیا مرستیال' :
               'Health Assistant'}
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' ? 'احصل على إجابات لأسئلة الصحة بلغتك. متاح 24/7.' :
             language === 'es' ? 'Obtén respuestas a preguntas de salud en tu idioma. Disponible 24/7.' :
             language === 'ps' ? 'د روغتیا پوښتنو ته ځوابونه په خپله ژبه ترلاسه کړئ. د 24/7 شتون.' :
             'Get answers to health questions in your language. Available 24/7.'}
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-warm-orange border-opacity-20">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-warm-orange text-white'
                      : 'bg-warm-cream text-gray-900 border border-warm-orange border-opacity-20'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-orange-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="p-4 bg-gray-50 border-t">
            <p className="text-sm text-gray-600 mb-3">
              {language === 'ar' ? 'أسئلة سريعة:' :
               language === 'es' ? 'Preguntas rápidas:' :
               language === 'ps' ? 'ژر پوښتنې:' :
               'Quick questions:'}
            </p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions[language as keyof typeof quickQuestions]?.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(question)}
                  className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-50 transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    language === 'ar' ? 'اكتب رسالتك هنا...' :
                    language === 'es' ? 'Escribe tu mensaje aquí...' :
                    language === 'ps' ? 'خپل پیغام دلته ولیکئ...' :
                    'Type your message here...'
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows={1}
                />
              </div>
              <button
                onClick={toggleVoiceInput}
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  isListening
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>
                              <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-warm-orange hover:bg-warm-coral disabled:bg-gray-300 text-white p-3 rounded-lg transition-colors duration-200"
                >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-800">
              {language === 'ar' ? 'موارد الطوارئ' :
               language === 'es' ? 'Emergencias' :
               language === 'ps' ? 'اورګانې' :
               'Emergency Resources'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800">911</p>
                <p className="text-sm text-red-600">
                  {language === 'ar' ? 'للمساعدة الطبية الطارئة' :
                   language === 'es' ? 'Para asistencia médica de emergencia' :
                   language === 'ps' ? 'د اورګانې طبي مرستې لپاره' :
                   'For emergency medical assistance'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800">988</p>
                <p className="text-sm text-red-600">
                  {language === 'ar' ? 'خط الأزمات والانتحار' :
                   language === 'es' ? 'Línea de Crisis y Suicidio' :
                   language === 'ps' ? 'د بحران او ځان وژنې کرښه' :
                   'Suicide & Crisis Lifeline'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatbotPage
