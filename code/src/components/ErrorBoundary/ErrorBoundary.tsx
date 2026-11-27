import { Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'
import './ErrorBoundary.css'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * Catches render errors so a broken component never blanks the whole page.
 * Offers a recovery action (reload) instead of a white screen.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Keep the trace in the console for debugging without exposing it to users
    console.error('Error capturado por ErrorBoundary:', error, errorInfo.componentStack)
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="error-boundary" role="alert" aria-live="assertive">
        <div className="error-boundary-card">
          <span className="error-boundary-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </span>
          <h2 className="error-boundary-title">Algo salió mal</h2>
          <p className="error-boundary-text">
            Ocurrió un error inesperado al mostrar el contenido. Podés recargar la
            página para volver a intentarlo.
          </p>
          <button type="button" className="error-boundary-btn" onClick={this.handleReload}>
            Recargar página
          </button>
        </div>
      </div>
    )
  }
}

export default ErrorBoundary