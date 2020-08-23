using System.Linq;
using System.Security.Claims;

namespace Mercury.Utils
{
    public class Auth
    {
        public static string GetUserId(ClaimsPrincipal user)
        {
            return user.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;
        }
    }
}
