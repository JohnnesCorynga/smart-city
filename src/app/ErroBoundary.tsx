"use client";
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import Image from 'next/image';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ImgErroPearson from "@/assets/images/img-error-pearson-pc.png";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Atualiza o estado para que a próxima renderização mostre a UI de fallback
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log de erros, se necessário
    console.error("Erro capturado no ErrorBoundary: ", error, errorInfo);
  }

  handleReload = () => {
    // Recarrega a página
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // UI de fallback personalizada
      return (
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-col flex-1 items-center gap-3 justify-center p-3">
            <Image
              width={300}
              height={300}
              src={ImgErroPearson}
              alt="Imagem pessoa no pc com erro"
            />
            <h1 className="text-4xl font-bold text-red-600">Ocorreu um erro!</h1>
            <p className="text-paragraph text-center">
              Tente novamente mais tarde ou entre em contato com o suporte.
            </p>
            <button
              className="button"
              onClick={this.handleReload}
            >
              Recarregar página
            </button>
          </div>
          <Footer />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
