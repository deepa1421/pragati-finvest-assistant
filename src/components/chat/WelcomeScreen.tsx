import botLogo from '@/assets/bot-logo.png';
import { MessageSquare, CreditCard, Truck, HelpCircle } from 'lucide-react';

type Props = {
  language: string;
  onSuggestionClick: (text: string) => void;
};

const greetings: Record<string, { greeting: string; subtitle: string; disclaimer: string }> = {
  en: {
    greeting: 'Hello! I am Sahayak, your FinServe assistant.',
    subtitle: 'How can I help you today?',
    disclaimer: 'This chatbot provides general information and does not offer financial or investment advice.',
  },
  hi: {
    greeting: 'नमस्ते! मैं सहायक हूँ, आपकी FinServe सहायक।',
    subtitle: 'आज मैं आपकी कैसे मदद कर सकती हूँ?',
    disclaimer: 'यह चैटबॉट सामान्य जानकारी प्रदान करता है और वित्तीय या निवेश सलाह नहीं देता।',
  },
  mr: {
    greeting: 'नमस्कार! मी सहायक आहे, तुमची FinServe सहाय्यक।',
    subtitle: 'आज मी तुम्हाला कशी मदत करू शकते?',
    disclaimer: 'हा चॅटबॉट सामान्य माहिती प्रदान करतो आणि आर्थिक किंवा गुंतवणूक सल्ला देत नाही.',
  },
  ta: {
    greeting: 'வணக்கம்! நான் சஹாயக், உங்கள் FinServe உதவியாளர்.',
    subtitle: 'இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    disclaimer: 'இந்த சாட்போட் பொதுவான தகவல்களை வழங்குகிறது, நிதி ஆலோசனை அல்ல.',
  },
  te: {
    greeting: 'నమస్కారం! నేను సహాయక్, మీ FinServe సహాయకురాలిని.',
    subtitle: 'ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?',
    disclaimer: 'ఈ చాట్‌బాట్ సాధారణ సమాచారం అందిస్తుంది, ఆర్థిక సలహా కాదు.',
  },
  kn: {
    greeting: 'ನಮಸ್ಕಾರ! ನಾನು ಸಹಾಯಕ್, ನಿಮ್ಮ FinServe ಸಹಾಯಕಿ.',
    subtitle: 'ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    disclaimer: 'ಈ ಚಾಟ್‌ಬಾಟ್ ಸಾಮಾನ್ಯ ಮಾಹಿತಿಯನ್ನು ನೀಡುತ್ತದೆ, ಆರ್ಥಿಕ ಸಲಹೆ ಅಲ್ಲ.',
  },
  ml: {
    greeting: 'നമസ്കാരം! ഞാൻ സഹായക്, നിങ്ങളുടെ FinServe അസിസ്റ്റന്റ്.',
    subtitle: 'ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും?',
    disclaimer: 'ഈ ചാറ്റ്ബോട്ട് പൊതുവായ വിവരങ്ങൾ നൽകുന്നു, സാമ്പത്തിക ഉപദേശമല്ല.',
  },
  bn: {
    greeting: 'নমস্কার! আমি সহায়ক, আপনার FinServe সহকারী।',
    subtitle: 'আজ আমি আপনাকে কিভাবে সাহায্য করতে পারি?',
    disclaimer: 'এই চ্যাটবট সাধারণ তথ্য প্রদান করে, আর্থিক পরামর্শ নয়।',
  },
  gu: {
    greeting: 'નમસ્તે! હું સહાયક છું, તમારી FinServe સહાયક.',
    subtitle: 'આજે હું તમને કેવી રીતે મદદ કરી શકું?',
    disclaimer: 'આ ચેટબોટ સામાન્ય માહિતી પ્રદાન કરે છે, નાણાકીય સલાહ નહીં.',
  },
  pa: {
    greeting: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਸਹਾਇਕ ਹਾਂ, ਤੁਹਾਡੀ FinServe ਸਹਾਇਕ।',
    subtitle: 'ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੀ ਹਾਂ?',
    disclaimer: 'ਇਹ ਚੈਟਬੋਟ ਸਧਾਰਨ ਜਾਣਕਾਰੀ ਦਿੰਦਾ ਹੈ, ਵਿੱਤੀ ਸਲਾਹ ਨਹੀਂ।',
  },
};

const suggestions: Record<string, { icon: typeof CreditCard; text: string }[]> = {
  en: [
    { icon: CreditCard, text: 'What types of business loans do you offer?' },
    { icon: Truck, text: 'Tell me about used vehicle loans' },
    { icon: HelpCircle, text: 'How can I check my loan eligibility?' },
    { icon: MessageSquare, text: 'What is the loan application process?' },
  ],
  hi: [
    { icon: CreditCard, text: 'आप किस प्रकार के बिज़नेस लोन देते हैं?' },
    { icon: Truck, text: 'पुराने वाहन लोन के बारे में बताएं' },
    { icon: HelpCircle, text: 'मैं अपनी लोन पात्रता कैसे जाँचूँ?' },
    { icon: MessageSquare, text: 'लोन आवेदन की प्रक्रिया क्या है?' },
  ],
  mr: [
    { icon: CreditCard, text: 'तुम्ही कोणत्या प्रकारचे बिझनेस लोन देता?' },
    { icon: Truck, text: 'जुन्या वाहन कर्जाबद्दल सांगा' },
    { icon: HelpCircle, text: 'मी माझी कर्ज पात्रता कशी तपासू?' },
    { icon: MessageSquare, text: 'कर्ज अर्जाची प्रक्रिया काय आहे?' },
  ],
  ta: [
    { icon: CreditCard, text: 'நீங்கள் என்ன வகையான வணிகக் கடன்களை வழங்குகிறீர்கள்?' },
    { icon: Truck, text: 'பயன்படுத்திய வாகனக் கடன் பற்றி சொல்லுங்கள்' },
    { icon: HelpCircle, text: 'எனது கடன் தகுதியை எப்படி சரிபார்ப்பது?' },
    { icon: MessageSquare, text: 'கடன் விண்ணப்ப செயல்முறை என்ன?' },
  ],
  te: [
    { icon: CreditCard, text: 'మీరు ఏ రకమైన వ్యాపార రుణాలు అందిస్తారు?' },
    { icon: Truck, text: 'వాడిన వాహన రుణాల గురించి చెప్పండి' },
    { icon: HelpCircle, text: 'నా రుణ అర్హతను ఎలా తనిఖీ చేయాలి?' },
    { icon: MessageSquare, text: 'రుణ దరఖాస్తు ప్రక్రియ ఏమిటి?' },
  ],
  kn: [
    { icon: CreditCard, text: 'ನೀವು ಯಾವ ರೀತಿಯ ವ್ಯಾಪಾರ ಸಾಲಗಳನ್ನು ನೀಡುತ್ತೀರಿ?' },
    { icon: Truck, text: 'ಬಳಸಿದ ವಾಹನ ಸಾಲದ ಬಗ್ಗೆ ಹೇಳಿ' },
    { icon: HelpCircle, text: 'ನನ್ನ ಸಾಲ ಅರ್ಹತೆಯನ್ನು ಹೇಗೆ ಪರಿಶೀಲಿಸುವುದು?' },
    { icon: MessageSquare, text: 'ಸಾಲ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ ಏನು?' },
  ],
  ml: [
    { icon: CreditCard, text: 'നിങ്ങൾ എന്തൊക്കെ ബിസിനസ് ലോണുകൾ നൽകുന്നു?' },
    { icon: Truck, text: 'ഉപയോഗിച്ച വാഹന ലോണിനെ കുറിച്ച് പറയൂ' },
    { icon: HelpCircle, text: 'എന്റെ ലോൺ യോഗ്യത എങ്ങനെ പരിശോധിക്കാം?' },
    { icon: MessageSquare, text: 'ലോൺ അപേക്ഷാ പ്രക്രിയ എന്താണ്?' },
  ],
  bn: [
    { icon: CreditCard, text: 'আপনারা কী ধরনের ব্যবসায়িক ঋণ দেন?' },
    { icon: Truck, text: 'পুরানো গাড়ির ঋণ সম্পর্কে বলুন' },
    { icon: HelpCircle, text: 'আমার ঋণের যোগ্যতা কীভাবে যাচাই করব?' },
    { icon: MessageSquare, text: 'ঋণ আবেদনের প্রক্রিয়া কী?' },
  ],
  gu: [
    { icon: CreditCard, text: 'તમે કયા પ્રકારની બિઝનેસ લોન આપો છો?' },
    { icon: Truck, text: 'વપરાયેલ વાહન લોન વિશે જણાવો' },
    { icon: HelpCircle, text: 'મારી લોન પાત્રતા કેવી રીતે તપાસવી?' },
    { icon: MessageSquare, text: 'લોન અરજીની પ્રક્રિયા શું છે?' },
  ],
  pa: [
    { icon: CreditCard, text: 'ਤੁਸੀਂ ਕਿਸ ਤਰ੍ਹਾਂ ਦੇ ਕਾਰੋਬਾਰੀ ਕਰਜ਼ੇ ਦਿੰਦੇ ਹੋ?' },
    { icon: Truck, text: 'ਪੁਰਾਣੇ ਵਾਹਨ ਕਰਜ਼ੇ ਬਾਰੇ ਦੱਸੋ' },
    { icon: HelpCircle, text: 'ਮੈਂ ਆਪਣੀ ਕਰਜ਼ਾ ਯੋਗਤਾ ਕਿਵੇਂ ਜਾਂਚਾਂ?' },
    { icon: MessageSquare, text: 'ਕਰਜ਼ਾ ਅਰਜ਼ੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਕੀ ਹੈ?' },
  ],
};

export function WelcomeScreen({ language, onSuggestionClick }: Props) {
  const lang = greetings[language] || greetings.en;

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center animate-fade-in-up">
        {/* Logo */}
        <div className="mx-auto w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg mb-6">
          <img src={botLogo} alt="Sahayak" className="h-14 w-14 object-contain" />
        </div>

        {/* Greeting */}
        <h1 className="text-2xl font-display font-bold text-foreground mb-2">{lang.greeting}</h1>
        <p className="text-lg text-muted-foreground mb-8">{lang.subtitle}</p>

        {/* Disclaimer */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 mb-8">
          <p className="text-xs text-muted-foreground">{lang.disclaimer}</p>
        </div>

        {/* Suggestions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(suggestions[language] || suggestions.en).map((s, i) => (
            <button
              key={i}
              onClick={() => onSuggestionClick(s.text)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-left text-sm text-foreground group"
            >
              <s.icon className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
              <span>{s.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}