using Microsoft.AspNetCore.Authorization;
using System;

namespace Mercury.Utils
{
    public class HasScopeRequirement : IAuthorizationRequirement
    {
        public string Scope { get; set; }
        public string Issuer { get; set; }

        public HasScopeRequirement(string scope, string issuer)
        {
            Scope = scope ?? throw new ArgumentNullException(nameof(scope));
            Issuer = issuer ?? throw new ArgumentNullException(nameof(issuer));
        }
    }
}
