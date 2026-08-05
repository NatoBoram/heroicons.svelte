<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserPlusSvelte from '../../../lib/20/solid/user-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UserPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="UserPlus" />
