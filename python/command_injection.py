# INTENCIONAL: Inyección de comandos
import sys, subprocess
user_arg = sys.argv[1] if len(sys.argv) > 1 else "example.txt"
cmd = f"ls -la {user_arg}"
print("Ejecutando:", cmd)
subprocess.run(cmd, shell=True)
