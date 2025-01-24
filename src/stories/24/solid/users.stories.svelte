<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UsersSvelte from '../../../lib/24/solid/users.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: UsersSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Users" />
