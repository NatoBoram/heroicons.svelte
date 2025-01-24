<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserSvelte from '../../../lib/20/solid/user.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UserSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="User" />
