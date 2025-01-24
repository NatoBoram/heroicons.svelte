<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserPlusSvelte from '../../../lib/20/solid/user-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UserPlusSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="UserPlus" />
