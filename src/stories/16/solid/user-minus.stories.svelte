<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserMinusSvelte from '../../../lib/16/solid/user-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: UserMinusSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="UserMinus" />
