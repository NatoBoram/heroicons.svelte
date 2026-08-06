<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UsersSvelte from '../../../lib/16/solid/users.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: UsersSvelte,
		args: { class: '' },
	})
</script>

<Story name="Users" />
