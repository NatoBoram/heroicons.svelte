<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserSvelte from '../../../lib/24/solid/user.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: UserSvelte,
		args: { class: '' },
	})
</script>

<Story name="User" />
