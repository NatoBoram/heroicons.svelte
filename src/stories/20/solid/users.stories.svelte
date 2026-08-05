<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UsersSvelte from '../../../lib/20/solid/users.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UsersSvelte,
		args: { class: '' },
	})
</script>

<Story name="Users" />
