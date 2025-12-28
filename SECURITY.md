# Security Guidelines 🔒

This document outlines important security practices and guidelines for the Jotion project.

## Environment Variables Security

### ⚠️ NEVER Commit These Files
The following files contain sensitive information and should NEVER be committed to version control:
- `.env`
- `.env.local`
- `.env.development`
- `.env.production`
- `.env.staging`
- `.env.test`

### ✅ What's Safe to Commit
- `.env.example` - Template file with placeholder values
- `.env.template` - Another template variant
- Configuration files without actual secrets

## API Keys and Secrets

### Clerk Authentication
- `CLERK_SECRET_KEY` - Server-side secret key (SENSITIVE)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Client-side publishable key (PUBLIC)

### Convex Backend
- `CONVEX_DEPLOYMENT` - Deployment identifier (SEMI-SENSITIVE)
- `NEXT_PUBLIC_CONVEX_URL` - Public URL (PUBLIC)

## Best Practices

### 1. Environment Variable Naming
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Never prefix server-side secrets with `NEXT_PUBLIC_`

### 2. Secret Rotation
- Regularly rotate your API keys and secrets
- Update environment variables when team members leave
- Use different keys for development and production

### 3. Access Control
- Limit who has access to production environment variables
- Use role-based access control in your deployment platform
- Regular audit of who has access to sensitive data

### 4. Monitoring
- Monitor for any accidental exposure of secrets in logs
- Set up alerts for suspicious authentication activities
- Regular security audits of your application

## Emergency Response

### If a Secret is Compromised:
1. **Immediately revoke** the compromised key/secret
2. **Generate new credentials** in the respective service
3. **Update environment variables** in all environments
4. **Review access logs** for any unauthorized usage
5. **Notify team members** if necessary

### If a Secret is Accidentally Committed:
1. **Remove the commit** from history (if possible and safe)
2. **Revoke the exposed credentials** immediately
3. **Generate new credentials**
4. **Force push** the cleaned history (coordinate with team)
5. **Update all environments** with new credentials

## Security Checklist

- [ ] All environment files are in `.gitignore`
- [ ] No hardcoded secrets in source code
- [ ] Different credentials for dev/staging/production
- [ ] Regular rotation of API keys
- [ ] Team members only have necessary access
- [ ] Monitoring and alerting set up
- [ ] Backup of environment configurations (stored securely)

## Useful Commands

### Check for accidentally committed secrets:
```bash
# Search for potential secrets in git history
git log --all --grep="password\|secret\|key\|token" -i

# Search for patterns in current files
grep -r "sk_" . --exclude-dir=node_modules
grep -r "pk_" . --exclude-dir=node_modules
```

### Clean up git history (USE WITH CAUTION):
```bash
# Remove file from git history
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch .env' --prune-empty --tag-name-filter cat -- --all
```

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Clerk Security Documentation](https://clerk.dev/docs/security)
- [Convex Security Best Practices](https://docs.convex.dev/auth/security)
- [Next.js Security](https://nextjs.org/docs/security)

---

🔐 **Remember**: Security is everyone's responsibility. When in doubt, err on the side of caution!