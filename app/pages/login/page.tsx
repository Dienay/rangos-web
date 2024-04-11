import styles from './login.module.css'

export default function Login() {
  return (
    <main className={styles.main}>
      <section className={styles.login}>
        <img className={styles.loginIcon} src="/logo.svg" alt="Logo Rappi" />
        <section className={styles.titleEnter}>
          <h1>Entrar</h1>
        </section>
        <form className={styles.formulario}>
          <div>
            <label>E-mail *</label>
            <input
              name="email"
              placeholder="email@email.com"
              type='email'
              required
            />
          </div>
          <div>
            <label>Senha *</label>
            <input
              name="password"
              placeholder="Mínimo 6 caracteres"
              required
            />
            <img className={styles.viewPasswordIcon} src="/NaoVendoSenha.png" alt="View Password Icon" />
          </div>
          <button>Entrar</button>
        </form>
        <section className={styles.novoUsuario}>
          <p>Não possui cadastro?<span className={styles.cadastrar}> Clique aqui </span></p>
        </section>
      </section>
    </main>
  )
}
new-version/Recreate-login-screen