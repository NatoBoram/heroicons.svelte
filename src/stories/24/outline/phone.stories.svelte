<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneSvelte from '../../../lib/24/outline/phone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PhoneSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Phone" />
