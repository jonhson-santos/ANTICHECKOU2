import React from 'react';
import { CreditCard, FileText, Zap, Shield, Check, Leaf } from 'lucide-react';

function App() {
  const paymentOptions = [
    {
      id: 'pix',
      title: 'Quero pagar por PIX',
      subtitle: 'Acesso mais rápido 🚀',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-200 hover:border-green-300',
      bgColor: 'bg-green-50 hover:bg-green-100',
      textColor: 'text-green-700',
      features: ['Confirmação automática', 'Liberação mais rápida'],
      recommended: true,
      link: 'https://app.pushinpay.com.br/service/pay/9f2f81da-27c6-47ab-9476-dfa943d410e1'
    },
    {
      id: 'card',
      title: 'Prefiro pagar com Cartão',
      subtitle: '💳',
      icon: CreditCard,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200 hover:border-blue-300',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      textColor: 'text-blue-700',
      features: ['Até 12x no cartão', 'Acesso imediato após aprovação'],
      link: 'https://mpago.la/2yLnMNA'
    },
    {
      id: 'boleto',
      title: 'Quero pagar por Boleto',
      subtitle: '🧾',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-200 hover:border-orange-300',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      textColor: 'text-orange-700',
      features: ['Pode levar até 48h para compensar', 'Ideal se você não usa cartão'],
      link: 'https://mpago.la/2yLnMNA'
    }
  ];

  const handlePaymentClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-green-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative leaves - hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-16 right-8 opacity-10 transform rotate-12">
        <Leaf className="w-16 h-16 text-green-600" />
      </div>
      <div className="hidden md:block absolute top-32 left-12 opacity-10 transform -rotate-12">
        <Leaf className="w-12 h-12 text-green-500" />
      </div>
      <div className="hidden md:block absolute bottom-24 left-8 opacity-10 transform rotate-45">
        <Leaf className="w-20 h-20 text-green-600" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 p-2 md:p-3 rounded-full mr-2 md:mr-3">
              <Leaf className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              Farmácia Natural em Casa
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight px-2">
            Falta só escolher a forma de pagamento para liberar o acesso ao 
            <span className="text-green-600"> Guia Farmácia Natural em Casa!</span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            📥 O acesso é 100% digital, liberado logo após a confirmação do pagamento. 
            Escolha abaixo como prefere pagar:
          </p>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 px-2 md:px-0">
          {paymentOptions.map((option) => (
            <div key={option.id} className="relative">
              {option.recommended && (
                <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                    Recomendado
                  </span>
                </div>
              )}
              
              <div className={`
                ${option.bgColor} ${option.borderColor} 
                border-2 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer
                ${option.recommended ? 'ring-2 ring-green-200 shadow-lg' : ''}
              `}>
                <div className="text-center mb-4 md:mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${option.color} mb-3 md:mb-4 shadow-lg`}>
                    <option.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4">
                    {option.subtitle}
                  </p>
                </div>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {option.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className={`w-4 h-4 md:w-5 md:h-5 ${option.textColor} mr-2 md:mr-3 flex-shrink-0`} />
                      <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handlePaymentClick(option.link)}
                  className={`
                    w-full py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold text-white text-sm md:text-base
                    bg-gradient-to-r ${option.color} 
                    hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200
                    focus:outline-none focus:ring-4 focus:ring-opacity-50 active:scale-95
                  `}
                >
                  Escolher {option.title.split(' ')[3] || 'esta opção'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8 mb-6 md:mb-8 mx-2 md:mx-0">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-600 mr-2 md:mr-3" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Compra 100% Segura</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Dados Protegidos</h4>
              <p className="text-gray-600 text-xs md:text-sm">Suas informações estão seguras com criptografia SSL</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Acesso Garantido</h4>
              <p className="text-gray-600 text-xs md:text-sm">Liberação automática após confirmação do pagamento</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">9.000+ Clientes</h4>
              <p className="text-gray-600 text-xs md:text-sm">Pessoas já confiaram na nossa farmácia natural</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center space-y-3 md:space-y-4 px-2 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-gray-600 text-xs md:text-sm">
            <a href="#" className="hover:text-green-600 transition-colors">Termos de Uso</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-green-600 transition-colors">Política de Privacidade</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-green-600 transition-colors">Suporte</a>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-green-100 p-1.5 md:p-2 rounded-full mr-2">
              <Leaf className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
            </div>
            <span className="text-gray-600 text-xs md:text-sm">© 2024 Farmácia Natural em Casa</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;