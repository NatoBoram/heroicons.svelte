<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserMinusSvelte from '../../../lib/16/solid/user-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: UserMinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="UserMinus" />
