<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserPlusSvelte from '../../../lib/24/solid/user-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: UserPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="UserPlus" />
