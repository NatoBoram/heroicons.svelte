<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UsersSvelte from '../../../lib/20/solid/users.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UsersSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Users" />
